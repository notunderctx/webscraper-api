import * as TEER from "puppeteer";

export let gyt = async (subreddit?: string) => {
    const browser = await TEER.launch({
        headless: true
    });
    const page = await browser.newPage();

    let sbt = "new";
    if (subreddit) {
        sbt = subreddit;
    }

    await page.goto(`https://old.reddit.com/${sbt}`);

    await page.setDefaultTimeout(5000);
    await page.screenshot({
        path: `scrshot.png`
    });

    await page.waitForSelector("a", {
        visible: true,
    });

    const data = await page.evaluate(() => {
        const site = document.getElementById("siteTable"); // Forum page
        if (site) {
            const tc = site.querySelectorAll(".title.may-blank.outbound");
            const ddiv = site.querySelectorAll("div");

            const result: any = [];

            ddiv.forEach(div => {
                const likeC = div.querySelectorAll(".midcol.unvoted");
                const spans = div.querySelectorAll("span");

                const upvotes = div.querySelector(".score.likes")?.textContent;
                const rank = div.querySelector(".rank")?.textContent;

                const titles:any = [];
                tc.forEach(titleElement => {
                    titles.push(titleElement.textContent);
                });

                result.push({
                    titles,
                    upvotes,
                    rank
                });
            });

            return result;
        } else {
            return [];
        }
    });

    await browser.close();

    return data
}


