<template>
    <section class="footer">
        <!-- <div class="container"> -->
            <div class="row footerclx">
                <div class="col-sm">
                    <ul  class="unorderedlistfooter">
                        <li class="listinfooter"><a href="">a</a></li>
                        <li class="listinfooter"><a href="">b</a></li>
                        <li class="listinfooter"><a href="">c</a></li>
                    </ul>
                </div>
                <div class="col-sm">
                    <ul class="unorderedlistfooter">
                        <li class="listinfooter"><a href="">a</a></li>
                        <li class="listinfooter"><a href="">b</a></li>
                        <li class="listinfooter"><p class="rights"> &copy 2024 All Rights Receiverd</p></li>
                    </ul>
                </div>
                <div class="col-sm">
                    <ul class="unorderedlistfooter">
                        <li class="listinfooter"><a href="">a</a></li>
                        <li class="listinfooter"><a href="">b</a></li>
                        <li class="listinfooter"><a href="">c</a></li>
                    </ul>
                </div>
            </div>
        <!-- </div> -->
    </section>
</template>

<script>
</script>

<style scoped>

.footer{
    background-color:#151d42;
    width: 100%;
   
    z-index: 9999;
}

section{
    position: relative;
    bottom:0; 
} 

.footerclx{
    margin:0;
}

.col-sm{
    display: flex;
    align-items: center;
    justify-content: center;
}

.unorderedlistfooter{
    list-style-type: none;  
    margin:0;
    bottom: 0;
    text-align: center;
}

a{
    text-decoration: none;
}

.rights{
    color: rgba(240, 248, 255, 0.459);
}
</style>