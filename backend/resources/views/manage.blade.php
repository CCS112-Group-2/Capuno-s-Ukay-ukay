<!DOCTYPE html>
<html>
<head>
<meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Capuno's Ukay-Ukay</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
        }

        #productsTable tbody tr:nth-child(odd) {
            background-color: rgba(0, 0, 255, 0.1); /* Blue with low opacity */
        }
        #productsTable tbody tr:nth-child(even) {
            background-color: rgba(0, 0, 255, 0.05); /* Lighter blue with low opacity */
        }
        #productsTable th, #productsTable td {
            border: 2px solid #000; /* 2-pixel border */
        }
    </style>
    </style>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
</head>
<body>
    <center>
    <h1>Capuno's Ukay-Ukay Product Management</h1>
    </center>
    
    <div class="container mt-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
            <h1>Product List</h1>
            <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#addProductModal">Add Product</button>
        </div>
        <table id="productsTable" class="table table-bordered">
            <thead class="table-dark">
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <!-- Products will be populated here -->
            </tbody>
        </table>
    </div>

    <div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="addProductModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addProductModalLabel">Add/Edit Product</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="add-product-form">
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" id="name" name="name" required>
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Description</label>
                            <input type="text" class="form-control" id="description" name="description" required>
                        </div>
                        <div class="mb-3">
                            <label for="price" class="form-label">Price</label>
                            <input type="number" class="form-control" id="price" name="price" required>
                        </div>
                        <button type="submit" class="btn btn-primary">Save</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="editProductModal" tabindex="-1" aria-labelledby="editProductModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="editProductModalLabel">Edit Product</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="product-form">
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" id="editname" name="name" required>
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Description</label>
                            <input type="text" class="form-control" id="editdescription" name="description" required>
                        </div>
                        <div class="mb-3">
                            <label for="price" class="form-label">Price</label>
                            <input type="number" class="form-control" id="editprice" name="price" required>
                        </div>
                        <button type="submit" class="btn btn-primary">Save</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="notificationModal" tabindex="-1" aria-labelledby="notificationModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body text-center">
                    <p id="notificationMessage"></p>
                </div>
            </div>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            fetchProducts();

            document.getElementById('add-product-form').addEventListener('submit', function (e) {
                e.preventDefault();
                addProduct();
            });
        });

        function fetchProducts() {
            axios.get('http://127.0.0.1:8000/api/products')
                .then(response => {
                    const products = response.data;
                    const tbody = document.querySelector('#productsTable tbody');
                    tbody.innerHTML = '';
                    products.forEach(product => {
                        const tr = document.createElement('tr');
                        tr.innerHTML = `
                            <td>${product.name}</td>
                            <td>${product.description}</td>
                            <td>${product.price}</td>
                            <td>
                                <button class="btn btn-success" onclick="editProduct(${product.id})">Edit</button>
                                <button class="btn btn-danger" onclick="deleteProduct(${product.id})">Delete</button>
                            </td>
                        `;
                        tbody.appendChild(tr);
                    });
                })
                .catch(error => console.error('Error fetching products:', error));
        }

        function addProduct() {
            const name = document.getElementById('name').value;
            const description = document.getElementById('description').value;
            const price = document.getElementById('price').value;
            console.log(name, description, price);
            axios.post('http://127.0.0.1:8000/api/manageAdd', { 
                    name, 
                    description, 
                    price 
                }, {
                    headers: {
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                    }
                })
                .then(response => {
                    fetchProducts();
                    document.getElementById('add-product-form').reset();
                    
                })
                .catch(error => console.error('Error adding product:', error));
        }
        

        function editProduct(productId) {
            axios.get(`http://127.0.0.1:8000/api/products/${productId}`)
            .then(response => {
                const product = response.data;

                // Populate form with product data
                document.getElementById('editname').value = product.name;
                document.getElementById('editdescription').value = product.description;
                document.getElementById('editprice').value = product.price;

                // Show the modal using Bootstrap's modal method
                const myModal = new bootstrap.Modal(document.getElementById('editProductModal'));
                myModal.show();

                // Handle form submission
                document.getElementById('product-form').onsubmit = function (event) {
                    event.preventDefault();

                    // Collect updated data from the form
                    const updatedProduct = {
                        name: document.getElementById('editname').value,
                        description: document.getElementById('editdescription').value,
                        price: document.getElementById('editprice').value
                    };

                    // Send update request
                    axios.put(`http://127.0.0.1:8000/api/products/${productId}`, updatedProduct)
                        .then(() => {
                            document.getElementById('notificationMessage').textContent = 'Product updated successfully!';
                            const notificationModal = new bootstrap.Modal(document.getElementById('notificationModal'));
                            notificationModal.show();

                            // Close the notification modal after 2 seconds
                            setTimeout(() => {
                                notificationModal.hide();
                            }, 2000);
                            fetchProducts();
                            myModal.hide();
                        })
                        .catch(error => {
                            console.error('There was an error updating the product!', error);
                        });
                };
            })
            .catch(error => {
                console.error('There was an error fetching the product data!', error);
            });
        }

        function deleteProduct(productId) {
            axios.delete(`http://127.0.0.1:8000/api/products/${productId}`)
                .then(response => {
                    fetchProducts();
                })
                .catch(error => console.error('Error deleting product:', error));
        }
    </script>
</body>
</html>