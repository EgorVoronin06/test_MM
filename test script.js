document.getElementById('medForm').addEventListener('submit', function(event){
    event.preventDefault();

    const medName = document.getElementById('medName').value;
    const medTime = document.getElementById('medTime').value;
    const medSideEffects =
    document.getElementById('medSideEffects');

    this,reset();
})

function addMedication(name, time, medSideEffects) {
    const medList = document.getElementById('medList');

}
