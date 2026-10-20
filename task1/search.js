   const search = document.querySelector("#search");
        const rows = document.querySelectorAll("#songs tr");

        search.addEventListener("input", () => {
            const query = search.value.trim().toLocaleLowerCase();

            rows.forEach((row) => {
                const matches = row.textContent.toLocaleLowerCase().includes(query);
                row.hidden = !matches;
            });
        });
