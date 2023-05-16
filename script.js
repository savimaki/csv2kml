window.onload = function() {
    var fileInput = document.getElementById('csvFileInput');
    fileInput.addEventListener('change', handleFileSelect, false);
};

function handleFileSelect(event) {
    var file = event.target.files[0];
    if (file.name.endsWith('.csv')) {
        var reader = new FileReader();

    reader.onload = function(event) {
        var csvData = event.target.result;
        var coordinates = parseCSV(csvData);
        var coordinateInput = document.getElementById('coordinateInput');
        coordinateInput.value = coordinates.join('\n');
    };

    reader.readAsText(file);
    } else {
        alert('Only CSV files are allowed!');
        location.reload();
    }
}

function parseCSV(csvData) {
    var lines = csvData.split('\n');
    var coordinates = [];

    for (var i = 0; i < lines.length; i++) {
        var parts = lines[i].split(',');
        var longitude = parts[0].trim().replace(/\s/g, '');
        var latitude = parts[1].trim().replace(/\s/g, '');

        if (longitude !== '' && latitude !== '') {
            coordinates.push(longitude + ',' + latitude);
        }
    }

    return coordinates;
}
