function fetchPostData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Post Data fetched")
        }, 2000);
    })
}

function fetchCommentData(){
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve("Comment data function")
        },3000)
    });
}

async function getBlogData() {
    try {
      console.log("Fetching Blog data");
      // const postdata = await fetchPostData()
      // const commentData = await fetchCommentData();

      const [postdata, commentData] = await Promise.all([
        fetchPostData(),
        fetchCommentData(),
      ]);
      console.log(postdata);
      console.log(commentData);
      console.log("fetch Complete");
    } catch (error) {
        console.error("Error fetching Blog Data", error);
        
    }
}

getBlogData()