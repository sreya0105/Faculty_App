document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('resetForm');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevents the form from submitting the traditional way

        const userId = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password === confirmPassword) {
            // Simulate a successful password resetmf
            messageDiv.textContent = 'Password reset successfully!';
            messageDiv.className = 'message success-message';
        } else {
            // Show an error message if passwords do not match
            messageDiv.textContent = 'Passwords do not match. Please try again.';
            messageDiv.className = 'message error-message';
        }
    });
});
