document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted');
});

document.querySelector('#file').addEventListener('change', function() {
    alert('File uploaded');
});
