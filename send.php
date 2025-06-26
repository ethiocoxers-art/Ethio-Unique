<?php
// Get form values
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$course = $_POST['course'];

// Telegram Bot credentials
$botToken = "8018622943:AAHPuBJDXJIxZUiylVRyXOEuFxaoAdae6bE"; // ← Replace this
$chatId = "5423556915";     // ← Replace this

// Format message
$message = "📩 New Student Registration:\n";
$message .= "👤 Name: $name\n";
$message .= "📧 Email: $email\n";
$message .= "📞 Phone: $phone\n";
$message .= "📘 Course: $course";

// Send to Telegram
$url = "https://api.telegram.org/bot$botToken/sendMessage?chat_id=$chatId&text=" . urlencode($message);

// Make request
file_get_contents($url);

// Optional: redirect or show thank-you
echo "<h2 style='font-family:sans-serif; text-align:center; color:green;'>Thanks for registering, $name!<br>We’ll contact you soon.</h2>";
?>
