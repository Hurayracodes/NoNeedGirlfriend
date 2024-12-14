
        function makeHeartBeat() {
            const heart = document.getElementById('heart');
            heart.classList.add('beating');
            
            const message = document.getElementById('message');
            const message1 = document.getElementById('message1');
            
            // Show messages after 1 second
            setTimeout(() => {
                message.style.display = 'block';
                message1.style.display = 'block';
            }, 1000);
        }

        function sendMessage() {
            const customMessage = document.getElementById('customMessage').value;
            if (customMessage.trim() === "") {
                alert("Please enter a message!");
                return;
            }
            const whatsappUrl = `https://wa.me/923166732581?text=${encodeURIComponent(customMessage)}`;
            window.open(whatsappUrl, '_blank');
        }

        function sendPredefinedMessage() {
            const predefinedMessage = "Your code is good and I like you a lot!";
            const whatsappUrl = `https://wa.me/923166732581?text=${encodeURIComponent(predefinedMessage)}`;
            window.open(whatsappUrl, '_blank');
        }