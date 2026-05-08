const maxPostsDaily = 10;

async function getBlogPosts(){
    let posts = []
    var now = new Date();
    var daysOfYear = [];
    let oldestDate = new Date(2026, 4, 6);
    for (var d = now; d >= oldestDate; d.setDate(d.getDate() - 1)) {
        daysOfYear.push(new Date(d));
    }
    for(let i = 0; i < daysOfYear.length; i++){
        let dateStr = daysOfYear[i].toISOString().split('T')[0];
        for(let j = maxPostsDaily; j >= 1; j--){
            let blogPost = await fetch("./blog/"+ dateStr + "-" + j + ".md")
                .then(res => res.text());
            const isHTML = (str) => /<[a-z][\s\S]*>/i.test(str);
            if(!isHTML(blogPost)){
                posts.push(blogPost);
            }
        }
    }

    return posts;
}

export default { getBlogPosts };