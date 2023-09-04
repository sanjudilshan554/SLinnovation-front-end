<template>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>

    <body>
        <navbar></navbar>
        <section class="main">
            <div class="display-5 helptext">Help Area</div>
        </section>

        <section>
            <div class="card tablesection">
                <div class="tablecls">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Accepter Name</th>
                                <th>Accepter Email</th>
                                <th>Accepter Mobile</th>
                                <th>Accepter Date</th>
                                <th>Meetup</th>
                                <th>Confirm</th>
                            </tr>
                        </thead>
                        <tbody class="tbodys">
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td><a href="" class="btn btn-primary">View</a></td>
                                <td><a href="" class="btn btn-success">Confirm</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </body>

    </html>
</template>

<script>
import navbar from '../components/navbar.vue'
export default {
    components: {
        navbar
    }
}
</script>

<style scoped>
.helptext {
    padding: 10px 0px 0px 50px;
}

.tablesection {
    margin: 50px 30px;
    max-height: 50vh;
    overflow: auto;
}

.tablecls {
    padding: 25px;
}

thead {
    text-align: center;
}

tbody {
    text-align: center;
}

.main {
    padding-top: 55px;
}
</style>
