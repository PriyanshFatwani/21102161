const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 9876;
const windowSize = 10;
const numbers = new Set(); 

async function fetchNumbers(type) {
  try {
    const response = await axios.get(`https://your-test-server-api.com/${type}`);
    return response.data.numbers;
  } catch (error) {
    console.error(`Error fetching numbers: ${error.message}`);
    return [];
  }
}

function calculateAverage(arr) {
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;
}

app.get('/numbers/:numberId', async (req, res) => {
  const numberId = req.params.numberId;
  const prevNumbers = [...numbers];

  try {
    const newNumbers = await fetchNumbers(numberId);
    newNumbers.forEach(num => numbers.add(num)); 
    if (numbers.size > windowSize) {
      numbers.delete([...numbers][0]); 
    }

    const currNumbers = [...numbers];
    const avg = calculateAverage(currNumbers.slice(-windowSize)); 
    res.json({
      windowPrevState: prevNumbers,
      windowCurrState: currNumbers,
      numbers: currNumbers,
      avg,
    });
  } catch (error) {
    console.error(`Error processing request: ${error.message}`);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
