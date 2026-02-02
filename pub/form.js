document.getElementById("form").addEventListener('submit', async (e) =>{
    e.preventDefault();

    const formData = e.target;

    const data = {
        name: formData.name.value,
        question: formData.question.value
    }

    try {
        // please fucking work
        const response = await fetch('/api/submit', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
    
        const result = await response.json();

        //only if data were added successfully to prevent duplicates
        if(response.ok) { 
            formData.reset();
        }

        //print server output as result
        document.getElementById('result').innerHTML = result.reason;

    } catch (err) {
        console.error(err);
    }
})