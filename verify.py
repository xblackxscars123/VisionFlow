from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    context = browser.new_context(
        record_video_dir="/home/jules/verification/"
    )
    page = context.new_page()
    page.goto("http://localhost:3000")
    page.wait_for_timeout(2000)

    # Check that max length works on textarea
    textarea = page.locator("textarea")
    textarea.fill("A" * 1500)

    val = textarea.input_value()
    print("Length of textarea value:", len(val))

    page.screenshot(path="/home/jules/verification/screenshot.png")

    context.close()
    browser.close()
