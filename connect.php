<?php
    include 'config.php';
    $last_name = $_POST['last_name'];
    $first_name = $_POST['first_name'];
    $lot_block = $_POST['lot_block'];
    $street = $_POST['street'];
    $place = $_POST['place'];
    $city = $_POST['city'];
    $baranggay = $_POST['baranggay'];
    $province = $_POST['province'];
    $country = $_POST['country'];
    $contact_number_country_code = $_POST['contact_number_country_code'];
    $contact_number = $_POST['contact_number'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    if($conn->connect_error) {
        die('Connection Failed : '.$conn->connect_error);
    } else {
        $stmt = $conn->prepare("INSERT INTO contact_me (last_name, first_name, lot_block, street, place, city, baranggay, province, country, contact_number_country_code, contact_number, email, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("sssssssssssss", $last_name, $first_name, $lot_block, $street, $place, $city, $baranggay, $province, $country, $contact_number_country_code, $contact_number, $email, $password);
        $stmt->execute();

    // Check if the query was successful
    if ($stmt->affected_rows > 0) {
        echo "Registration successful...";
    } else {
        echo "Error: Registration failed.";
    }

    // Close statement and database connection
    $stmt->close();
    $conn->close();
}
?>