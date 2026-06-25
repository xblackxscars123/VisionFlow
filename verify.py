from playwright.sync_api import sync_playwright

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(record_video_dir="/home/jules/verification/videos")
        page = context.new_page()

        # Navigate to the app
        page.goto("http://localhost:3000/")
        page.wait_for_selector("text=VisionFlow")

        # Take a screenshot of the main page
        import os
        os.makedirs("/home/jules/verification/screenshots", exist_ok=True)
        page.screenshot(path="/home/jules/verification/screenshots/main_page.png")

        context.close()
        browser.close()

if __name__ == "__main__":
    verify()
