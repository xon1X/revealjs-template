const updatePageTitle = (pageIndex) => {
    let pageTitle = ''
    let footerName = ''
    if (pageIndex >= 1) {
        pageTitle = 'Agenda'
        footerName = ' Jonas Göbel'
    }
    if (pageIndex >= 2) pageTitle = 'Organisatorisches'
    if (pageIndex >= 4) pageTitle = 'Es war einmal...'
    if (pageIndex >= 7) pageTitle = 'Kubernetes'
    if (pageIndex >= 13) pageTitle = 'Kubernetes Objects'
    if (pageIndex >= 27) pageTitle = 'kubectl'
    if (pageIndex >= 30) pageTitle = 'Helm'
    if (pageIndex >= 29) pageTitle = 'Selbst ausprobieren'
    if (pageIndex >= 32) pageTitle = 'Ausblick'
    if (pageIndex === 36) {
        pageTitle = ''
        footerName = ''
    }
    if (pageIndex >= 37) pageTitle = 'Quellenangaben'

    document.getElementById('title').innerHTML = pageTitle
    document.getElementById('footername').innerHTML = footerName
}

export default updatePageTitle
