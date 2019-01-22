



export default function (url,fileJson){
    fileJson.forEach(ele => {
        console.log('--------fileJson----',ele)

        fetch(url,{
            method : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body : JSON.stringify(ele)
        })
        
    });
}