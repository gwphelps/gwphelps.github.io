const maxPostsDaily = 10;

async function getBlogPosts(){
    let posts = []
    var now = new Date();
    var daysOfYear = [];
    let oldestDate = new Date(2026, 4, 6);
    console.log(oldestDate);
    console.log(now);
    console.log(oldestDate <= now);
    for (var d = now; d >= oldestDate; d.setDate(d.getDate() - 1)) {
        console.log(d);
        daysOfYear.push(new Date(d));
    }
    console.log(daysOfYear);
    for(let i = 0; i < daysOfYear.length; i++){
        let dateStr = daysOfYear[i].toISOString().split('T')[0];
        for(let j = maxPostsDaily; j >= 1; j--){
            let blogPost = await fetch("./blog/"+ dateStr + "-" + j + ".md").then(res => {
                console.log(res);
                return res;
            })
            .then(res => res.text());
            console.log(blogPost);
            if(!blogPost.includes("<!doctype html>")){
                posts.push(blogPost);
            }
        }
    }

    return posts;
}

export default { getBlogPosts };