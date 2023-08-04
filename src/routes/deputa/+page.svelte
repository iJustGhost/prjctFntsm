<script lang="ts">
    let state = false;
    function toggle() {
        state = !state;
    }
</script>

<h1>
    sddgshgdjhasd
</h1>
<button on:click={toggle}>
    toggle
</button>
<p>{state}</p>