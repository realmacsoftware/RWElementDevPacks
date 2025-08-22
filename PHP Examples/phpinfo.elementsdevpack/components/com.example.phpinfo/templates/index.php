@if(edit)
    @if(showPhpInfo)
        <div class="text-gray-500 p-4">
            PHP Info display is enabled and will show view PHP information in preview/publish.
        </div>
    @else
        <div class="text-gray-500 p-4">
            PHP Info display is disabled. Enable it in the component settings to view PHP information.
        </div>
    @endif
@elseif(showPhpInfo)
    <div>
        <?php phpinfo(); ?>
    </div>
@endif
