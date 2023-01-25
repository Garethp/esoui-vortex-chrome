(function() {
    if (!!document.getElementById('download-with-vortex')) return;

    const [_, id] = document.location.toString().match("\/info([\\d]+)-");

    const downloadWithVortex = document.createElement('a');
    downloadWithVortex.id = 'download-with-vortex';
    downloadWithVortex.innerHTML = '<img src="https://www.nexusmods.com/assets/images/white_vortex.svg" alt="Download With Vortex" title="Download With Vortex" width="60" height="53" border="0">';
    downloadWithVortex.href = `vortex-esoui://install/${id}`;
    downloadWithVortex.style.float = 'left';

    const downloadButton = document.getElementById('downloadbutton');

    downloadButton.parentNode.insertBefore(downloadWithVortex, downloadButton);
    downloadButton.style.width = '360px';
})();
