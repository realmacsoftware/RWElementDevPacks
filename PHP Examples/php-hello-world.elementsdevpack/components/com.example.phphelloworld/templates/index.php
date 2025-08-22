<?php 
// Include the shared PHP file
include_once($_SERVER['DOCUMENT_ROOT'] . '/{{sharedAssetPath}}/hello.php');
?>

<div class="p-5 bg-gray-200 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg my-3">

    @if(edit)

        <div class="italic text-center ">
            <p>PHP Hello World Component</p>
            <p class="text-sm mt-2">Configure the name in the component settings</p>
        </div>

    @else

        <h2 class="text-xl font-bold mb-4">
            <?php echo sayHello('{{name}}'); ?>
        </h2>

        <p>
            <strong>Current Time:</strong> 
            <?php echo getCurrentTime(); ?>
        </p>

        <p>
            <strong>PHP Version:</strong> 
            <?php echo getPhpVersion(); ?>
        </p>

        <div class="text-gray-600 italic pt-3">
            <p>This message was generated using the hello.php shared PHP file located in the {{sharedAssetPath}} folder.</p>
        </div>

    @endif

</div> 