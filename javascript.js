const container = document.querySelector('.container');

let n = 16;


function makeTable(n)
{
    for (let x = 0; x < n; x++) {
        const row = document.createElement("div");
        row.classList.add("row");

        if (x == 0)
        {
            row.classList.add("border-top");
        }
        else if (x == n-1)
        {
            row.classList.add("border-bottom");
        }

        for (let j = 0; j < n; j++)
        {
            const cell = document.createElement("div");
            
            cell.style.height = "50px";
            cell.style.width = "50px";

            if (j == n-1)
            {
                cell.classList.add("border-right");
            }
            if (j == 0)
            {
                cell.classList.add("border-left");
            }
            const getColor = () => {
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                cell.style.backgroundColor = "#" + randomColor;
            }
            cell.addEventListener("mouseover", getColor);
            row.appendChild(cell);
        }

        container.appendChild(row);
    }
}

makeTable(10);