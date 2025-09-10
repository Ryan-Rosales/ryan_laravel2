<!DOCTYPE html>
<html>
<head>
    <title>Ryan Rosales</title>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
</head>
<body>
    <header>
        <a href="{{ url('/') }}">Home</a>
        <a href="{{ url('/about') }}">About Us</a>
        <a href="{{ url('/contact') }}">Contact</a>
    </header>

    <div class="container">
        @yield('content')
    </div>
</body>
</html>