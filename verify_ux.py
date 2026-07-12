import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            record_video_dir="/home/jules/verification/",
            record_video_size={"width": 1280, "height": 720}
        )
        page = await context.new_page()

        # Mock the Gemini API for image generation to simulate a successful pipeline
        async def handle_api(route):
            mock_response = {
                "candidates": [{
                    "content": {
                        "parts": [{
                            "inlineData": {
                                "mimeType": "image/png",
                                "data": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                            }
                        }]
                    }
                }]
            }
            await route.fulfill(json=mock_response)

        await page.route("https://generativelanguage.googleapis.com/**", handle_api)

        await page.goto("http://localhost:3000/")

        # We might not need to click "Use Free Model" if fallback kicks in immediately. Let's just wait for the textarea if the button isn't there.
        try:
            await page.wait_for_selector("text=Use Free Model (Standard)", timeout=5000)
            await page.click("text=Use Free Model (Standard)")
        except:
            print("Free model button not found, moving to next step")

        # Generate image
        await page.wait_for_selector("text=Generate from Prompt")

        # Test clicking the label to focus the textarea
        await page.click("label[for='prompt-input']")

        # Verify textarea is focused
        is_focused = await page.evaluate("document.activeElement.id === 'prompt-input'")
        print(f"Textarea focused by label click: {is_focused}")

        await page.fill("#prompt-input", "A cool tech gadget")
        await page.click("text=Start Automation")

        # Wait for processing to finish (we are mocking the APIs so it should be fast, but we'll wait for the download button)
        await page.wait_for_selector("button[title='Download image']", state="attached", timeout=10000)

        # Test Keyboard Focus on Download Button
        # The button is hidden until focused via keyboard because of group-focus-within
        # We'll try focusing the button to ensure it works
        await page.evaluate("document.querySelector('button[title=\"Download image\"]').focus()")

        # Take screenshot of the focused download button state
        await page.screenshot(path="/home/jules/verification/focus_state.png")

        await context.close()
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
