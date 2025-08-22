<?php
/**
 * Hello World PHP Function
 * This is a shared PHP file that can be included by components
 */

function sayHello($name = 'World') {
    return "Hello, " . htmlspecialchars($name) . "!";
}

function getCurrentTime() {
    return date('Y-m-d H:i:s');
}

function getPhpVersion() {
    return PHP_VERSION;
}

?> 