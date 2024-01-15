/*$(document).ready(() => {
    $.ajax({
        url: "data.json",
        method: "GET",
        success: function (data) {
            const itemsPerPage = 10; // Adjust as needed
            let currentPage = 1;
            
            function paginateData(data, page) {
                const startIndex = (page - 1) * itemsPerPage;
                const endIndex = startIndex + itemsPerPage;
                return data.slice(startIndex, endIndex);
            }

            const paginatedData = paginateData(data, currentPage);

            function renderData(data) {
                // Render data to the DOM, e.g., create HTML elements
                // and append them to a container element
                const results = data;
                $('.loader').hide();
                results.forEach(items => {
                    const item =
                        `
              <div class='item-container'>
                <img id='cover' src='` +
                        items.cover +
                        `' loading='lazy'/>
                <p id='title'>` +
                        items.title +
                        `</p>
              </div>
            `;
                    $(".new-page").append(item);
                });
            }

            renderData(paginatedData);

           /* $("#loadMoreBtn").on("click", function () {
                currentPage++;
                $('.loader').show();
                renderData(paginateData(data, currentPage));
            });
        },
        error: function (error) {
            console.error("Error fetching JSON data:", error);
        }
    });
});*/

