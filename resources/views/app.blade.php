<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap">

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead

        {{-- <style>
            /* Hide scrollbar for Chrome, Safari and Opera */
            .container-snap::-webkit-scrollbar {
                display: none!important;
            }

            /* Hide scrollbar for IE, Edge and Firefox */
            .container-snap {
                -ms-overflow-style: none!important; /* IE and Edge */
                scrollbar-width: none!important; /* Firefox */
            }
        </style> --}}

    </head>
    <body class="font-sans antialiased h-screen">

        {{-- <audio id="musicplayer" autoPlay>
            <source src="assets/menu-sound1.mp3" />
        </audio> --}}

        @inertia
    </body>
</html>
