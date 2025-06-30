function openClaimModal(criminalName, reward) {
    const modal = document.getElementById('claimModal');
    const modalTitle = document.getElementById('modalTitle');
    modalTitle.textContent = `Claim Reward for ${criminalName} ($${reward.toLocaleString()})`;
    modal.classList.remove('hidden');
}

function closeClaimModal() {
    const modal = document.getElementById('claimModal');
    modal.classList.add('hidden');
    document.getElementById('claimForm').reset();
}

function handleClaimSubmit(event) {
    event.preventDefault();
    const proofImage = document.getElementById('proofImage').files[0];
    const location = document.getElementById('location').value;
    const btcAddress = document.getElementById('btcAddress').value;
    
    // For demo purposes, log the form data to console
    console.log('Claim Submission:');
    console.log('Proof Image:', proofImage ? proofImage.name : 'No file selected');
    console.log('Location:', location);
    console.log('BTC Address:', btcAddress);
    
    alert('Claim submitted! (This is a demo - data logged to console.)');
    closeClaimModal();
}