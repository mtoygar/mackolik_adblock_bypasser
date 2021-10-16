const targetNode = document.querySelector('body');

const observer = new MutationObserver((mutationsList, _observer) => {
  mutationsList.forEach(mutation => {
    if (mutation.type === 'childList') {
      mutation.addedNodes.forEach(node => {
        if (node.className === 'fc-ab-root') {
          targetNode.removeChild(node);
        }
      })
    }
  })
});

observer.observe(targetNode, { attributes: false, childList: true, subtree: false });
