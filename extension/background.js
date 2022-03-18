chrome.runtime.onInstalled.addListener(function () {
  const domain = 'app.contentful.com'

  // Tap onto the Contentful domain
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules(
      [
        {
          conditions: [
            new chrome.declarativeContent.PageStateMatcher({
              pageUrl: {
                hostEquals: domain
              },
            })
          ],

          actions: [
            new chrome.declarativeContent.ShowPageAction()
          ]
        }
      ]
    )
  })

})
