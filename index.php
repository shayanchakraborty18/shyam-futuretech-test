<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="/docs/4.0/assets/img/favicons/favicon.ico">

    <title>Jumbotron Template for Bootstrap</title>

    <link rel="canonical" href="https://getbootstrap.com/docs/4.0/examples/jumbotron/">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">

    <style>
        .create__user {
            border-right: 2px solid #282828;
        }
    </style>
</head>

<body>

    <main role="main">

        <!-- Main jumbotron for a primary marketing message or call to action -->
        <div class="jumbotron">
            <div class="container">
                <h1 class="display-3 text-center">Shyam Future Tech Test</h1>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-md-3 create__user">
                    <h2>Create New User</h2>
                    <form id="new_user_frm">

                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Name">
                        </div>

                        <div class="form-group">
                            <label for="address">Address</label>
                            <textarea id="address" class="form-control"></textarea>
                        </div>

                        <div class="form-group">
                            <label for="gender">Gender</label>
                            <select id="gender" class="form-control">
                                <option value="">Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="image">Image</label>
                            <input type="file" class="form-control-file" id="image" accept="image/*">
                            <br>
                            <img id="show_img" src="" alt="your image" width="200" style="display:none;" />
                        </div>


                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div class="col-md-9">
                    <h2 class="text-center">View All User</h2>
                    <a href="javascript:void(0)" orderby="asc" id="sortbyname" class="btn btn-secondary">Sort By Name </i></a>

                    <a href="javascript:void(0)" orderby="asc" id="sortbyid" class="btn btn-secondary">Sort By Id </i></a>

                    <br><br>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Image</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody id="show_users"> </tbody>
                    </table>
                </div>

            </div>

            <hr>

        </div> <!-- /container -->

    </main>

    <footer class="container">
        <p>&copy; Shyam Future Tech <?php echo date('Y'); ?></p>
    </footer>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script src="custom.js"></script>
</body>

</html>