<?php
    $fullName = $_POST['fullName'];
    $email = $_POST['email'];
    $totalperson = $_POST['totalperson'];
    $bookingdate = date('Y-m-d', strtotime($_POST['bookingdate']));
    $message = $_POST['message'];

//Database connection
$conn = new mysqli('localhost','root','','foodie');
if($conn->connect_error) {
    die('Connection Failed : '.$conn->connect_error);
}else{
    $stmt = $conn -> prepare("insert into booking(fullName, email, totalperson, bookingdate, message) 
    values(?, ?, ?, ?, ?)");
        $stmt->bind_param("sssss",$fullName, $email, $totalperson, $bookingdate, $message);

if ($stmt->execute()) {
        // Display success message
        echo '
        <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking Successful</title>
    <!-- Materialize CSS -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet">
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f5f5f5;
        }

        .card-panel {
            width: 50%;
            border-radius: 10px;
        }

        .success-message {
            text-align: center;
            color: #388e3c;
        }

        .success-icon {
            font-size: 4rem;
            color: #388e3c;
        }

        .buttons {
            display: flex;
            justify-content: space-evenly;
            margin-top: 20px;
        }
    </style>
</head>

<body>

    <div class="card-panel white">
        <i class="material-icons success-icon">Foodie Booking Status</i>
        <h3 class="success-message">Booking Successful!</h3>
        <p class="success-message">Your booking has been confirmed. Thank you for choosing us!</p>
        <div class="buttons">
            <a href="http://localhost/foodie/" class="waves-effect waves-light btn blue">New Booking</a>
        </div>
    </div>

    <!-- Materialize JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</body>

</html>
        ';
    } else {
        // Handle error
        echo "Error: " . $stmt->error;
    }

}
?>
