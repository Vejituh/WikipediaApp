 $(document).ready(function () {
        $("#searchButton").on("click", function () {
            var srsearch = "";
            var nameInput = document.getElementById('name');
            document.querySelector('form.pureForm').addEventListener('submit', function (e) {
                e.preventDefault();
                srsearch = nameInput.value;
                console.log(srsearch);
                $.ajax({
                    url: '//en.wikipedia.org/w/api.php',
                    data: {
                        action: 'query',
                        list: 'search',
                        srsearch: srsearch,
                        format: 'json',
                        formatversion: 2
                    },
                    dataType: 'jsonp',
                    success: function (x) {
                        $("#displayResult").empty();
                        console.log(x.query.search[0]);
                        for (var i = 0; i < x.query.search.length; i++) {
                            var hrefValue = "https://en.wikipedia.org/?curid=" + x.query.search[i].pageid;
                            $('#displayResult').append('<div class="card resultItems"><a href=' + hrefValue + '>' + x.query.search[i].title + '</a>' + '<p>  <small class="text-muted">' + x.query.search[i].snippet + "..." + '</p></div><br>');
                        }
                        ;
                    }
                });
            });
        });
    });
