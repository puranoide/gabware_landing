const TbodyElements = document.getElementById("datos-posts");

function getPostsApi() {
  fetch("../controllers/posts.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      action: "getPosts",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      if (data.success) {
        //console.log("respuesta :", data);
        //alert("post exitoso");
        //window.location.href = "gestionPosts.php";
        llenarTabla(data.posts, TbodyElements);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

window.onload = () => {
  getPostsApi();
};

function llenarTabla(posts, tbody) {
  tbody.innerHTML = "";
  console.log("obtenemos los posts para gestionarlos", posts);

  posts.forEach((post) => {
    const tr = document.createElement("tr");

    tr.classList.add(
      "bg-white",
      "lg:hover:bg-gray-100",
      "flex",
      "lg:table-row",
      "flex-row",
      "lg:flex-row",
      "flex-wrap",
      "lg:flex-no-wrap",
      "mb-10",
      "lg:mb-0"
    );
    const idTd = document.createElement("td");
    idTd.classList.add(
      "w-full",
      "lg:w-auto",
      "p-3",
      "text-gray-800",
      "text-center",
      "border",
      "border-b",
      "block",
      "lg:table-cell",
      "relative",
      "lg:static"
    );
    const idSpan = document.createElement("span");
    idSpan.classList.add(
      "lg:hidden",
      "absolute",
      "top-0",
      "left-0",
      "bg-blue-200",
      "px-2",
      "py-1",
      "text-xs",
      "font-bold",
      "uppercase"
    );
    idSpan.textContent = "id";
    idTd.appendChild(idSpan);
    idTd.appendChild(document.createTextNode(post.id));

    const tituloTd = document.createElement("td");
    tituloTd.classList.add(
      "w-full",
      "lg:w-auto",
      "p-3",
      "text-gray-800",
      "text-center",
      "border",
      "border-b",
      "block",
      "lg:table-cell",
      "relative",
      "lg:static"
    );
    const tituloSpan = document.createElement("span");
    tituloSpan.classList.add(
      "lg:hidden",
      "absolute",
      "top-0",
      "left-0",
      "bg-blue-200",
      "px-2",
      "py-1",
      "text-xs",
      "font-bold",
      "uppercase"
    );
    tituloSpan.textContent = "titulo";
    tituloTd.appendChild(tituloSpan);
    tituloTd.appendChild(document.createTextNode(post.titulo));

    const imgTd = document.createElement("td");
    imgTd.classList.add(
      "w-full",
      "lg:w-auto",
      "p-3",
      "text-gray-800",
      "text-center",
      "border",
      "border-b",
      "block",
      "lg:table-cell",
      "relative",
      "lg:static"
    );
    const imgSpan = document.createElement("span");
    imgSpan.classList.add(
      "lg:hidden",
      "absolute",
      "top-0",
      "left-0",
      "bg-blue-200",
      "px-2",
      "py-1",
      "text-xs",
      "font-bold",
      "uppercase"
    );
    imgSpan.textContent = "img";
    imgTd.appendChild(imgSpan);
    imgTd.appendChild(document.createTextNode(post.link_img));

    const estadoTd = document.createElement("td");
    estadoTd.classList.add(
      "w-full",
      "lg:w-auto",
      "p-3",
      "text-gray-800",
      "text-center",
      "border",
      "border-b",
      "block",
      "lg:table-cell",
      "relative",
      "lg:static"
    );
    estadoTd.appendChild(document.createTextNode("estado"));

    const accionesTd = document.createElement("td");
    accionesTd.appendChild(document.createTextNode(" "));

    const editLink = document.createElement("a");
    editLink.classList.add("text-blue-400", "hover:text-blue-600", "underline");
    editLink.textContent = "Editar";
    editLink.onclick = function () {
        alert(`editar ${post.id}`);
    }
    accionesTd.appendChild(editLink);

    const eliminarLink = document.createElement("a");
    eliminarLink.classList.add("text-blue-400", "hover:text-blue-600", "underline", "pl-6");
    eliminarLink.textContent = "Eliminar";
    eliminarLink.onclick = function () {
        alert(`eliminar ${post.id}`);
    }
    accionesTd.appendChild(eliminarLink);

    tr.appendChild(idTd);
    tr.appendChild(tituloTd);
    tr.appendChild(imgTd);
    tr.appendChild(estadoTd);
    tr.appendChild(accionesTd);
    tbody.appendChild(tr);
  });
}
