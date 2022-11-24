let searchInput = document.querySelector('[data-testid="SearchBox_Search_Input"]');
let searchButton = null;
let userScreenName = null;
let word = null;
let cursor = "";
let tweetSet = new Array()
let filtered = new Array()

let sectionHTML = `<div class="css-1dbjc4n"> <div class="css-1dbjc4n"> <section aria-labelledby="accessible-list-1" role="region" class="css-1dbjc4n"> <h1 dir="auto" aria-level="1" role="heading" class="css-4rbku5 css-901oao r-4iw3lz r-1xk2f4g r-109y4c4 r-1udh08x r-wwvuq4 r-u8s1d r-92ng3h" id="accessible-list-1">Search timeline</h1> <div aria-label="Timeline: Search timeline" class="css-1dbjc4n"> <div style="position: relative;"> </div> </div> </section> </div> </div>`
let singleTweetHTML = `<div data-testid="cellInnerDiv"> <div class="css-1dbjc4n r-1igl3o0 r-qklmqi r-1adg3ll r-1ny4l3l"> <div class="css-1dbjc4n"> <div class="css-1dbjc4n"> <article aria-labelledby="id__q286o2hdiod id__kfg887gvoa id__xepmox6kxze id__kelepdrovqf id__cuv5k3nue2k id__jl7ru7r40rk id__j9hux5quvud id__lv45k5ipgo id__trbcgx33vso id__kw3ij8zbd5 id__spgc82ge1r id__k9sbmqgh4u id__1rh1xco8od9 id__lx294sznrbp id__y8eety1vw0c id__vncn2q674ar id__gdmmnhb1e4r id__iypi9tessu9 id__6l02t9g1wlr" role="article" tabindex="0" class="css-1dbjc4n r-1loqt21 r-18u37iz r-1ny4l3l r-1udh08x r-1qhn6m8 r-i023vh r-o7ynqc r-6416eg" data-testid="tweet"> <div class="css-1dbjc4n r-eqz5dr r-16y2uox r-1wbh5a2"> <div class="css-1dbjc4n r-16y2uox r-1wbh5a2 r-1ny4l3l"> <div class="css-1dbjc4n"> <div class="css-1dbjc4n"> <div class="css-1dbjc4n r-18u37iz"> <div class="css-1dbjc4n r-1iusvr4 r-16y2uox r-ttdzmv"></div> </div> </div> <div class="css-1dbjc4n r-18u37iz"> <div class="css-1dbjc4n r-1awozwy r-1hwvwag r-18kxxzh r-1b7u577"> <div class="css-1dbjc4n" data-testid="Tweet-User-Avatar"> <div class="css-1dbjc4n r-18kxxzh r-1wbh5a2 r-13qz1uu"> <div class="css-1dbjc4n r-1wbh5a2 r-dnmrzs"> <div class="css-1dbjc4n r-1adg3ll r-h3s6tt r-bztko3" style="width: 48px;"> <div class="r-1adg3ll r-13qz1uu" style="padding-bottom: 100%;"> </div> <div class="r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-ipm5af r-13qz1uu"> <div class="css-1dbjc4n r-1adg3ll r-1pi2tsx r-1wyvozj r-bztko3 r-u8s1d r-1v2oles r-desppf r-13qz1uu"> <div class="r-1adg3ll r-13qz1uu" style="padding-bottom: 100%;"></div> <div class="r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-ipm5af r-13qz1uu"> <div class="css-1dbjc4n r-sdzlij r-ggadg3 r-1udh08x r-u8s1d r-8jfcpp" style="height: calc(100% + 4px); width: calc(100% + 4px);"> <a href="#" aria-hidden="true" role="link" tabindex="-1" class="css-4rbku5 css-18t94o4 css-1dbjc4n r-1niwhzg r-1loqt21 r-1pi2tsx r-1ny4l3l r-o7ynqc r-6416eg r-13qz1uu"> <div class="css-1dbjc4n r-sdzlij r-1wyvozj r-1udh08x r-633pao r-u8s1d r-1v2oles r-desppf" style="height: calc(100% - 4px); width: calc(100% - 4px);"> <div class="css-1dbjc4n r-1niwhzg r-1pi2tsx r-13qz1uu"> </div> </div> <div class="css-1dbjc4n r-sdzlij r-1wyvozj r-1udh08x r-633pao r-u8s1d r-1v2oles r-desppf" style="height: calc(100% - 4px); width: calc(100% - 4px);"> <div class="css-1dbjc4n r-kemksi r-1pi2tsx r-13qz1uu"> </div> </div> <div class="css-1dbjc4n r-kemksi r-sdzlij r-1wyvozj r-1udh08x r-633pao r-u8s1d r-1v2oles r-desppf" style="height: calc(100% - 4px); width: calc(100% - 4px);"> <div class="css-1dbjc4n r-1adg3ll r-1udh08x" style=""> <div class="r-1adg3ll r-13qz1uu" style="padding-bottom: 100%;"> </div> <div class="r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-ipm5af r-13qz1uu"> <div aria-label="" class="css-1dbjc4n r-1p0dtai r-1mlwlqe r-1d2f490 r-1udh08x r-u8s1d r-zchlnj r-ipm5af r-417010"> <div class="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"> </div> </div> </div> </div> </div> <div class="css-1dbjc4n r-sdzlij r-1wyvozj r-1udh08x r-u8s1d r-1v2oles r-desppf" style="height: calc(100% - 4px); width: calc(100% - 4px);"> <div class="css-1dbjc4n r-172uzmj r-1pi2tsx r-1ny4l3l r-o7ynqc r-6416eg r-13qz1uu"> </div> </div> </a></div> </div> </div> </div> </div> </div> </div> </div> </div> <div class="css-1dbjc4n r-1iusvr4 r-16y2uox r-1777fci r-kzbkwu"> <div class="css-1dbjc4n"> <div class="css-1dbjc4n r-zl2h9q"> <div class="css-1dbjc4n r-k4xj1c r-18u37iz r-1wtj0ep"> <div class="css-1dbjc4n r-1d09ksm r-18u37iz r-1wbh5a2"> <div class="css-1dbjc4n r-1wbh5a2 r-dnmrzs r-1ny4l3l"> <div class="css-1dbjc4n r-1awozwy r-18u37iz r-1wbh5a2 r-dnmrzs r-1ny4l3l" id="id__cuv5k3nue2k" data-testid="User-Names"> <div class="css-1dbjc4n r-1awozwy r-18u37iz r-1wbh5a2 r-dnmrzs"> <div class="css-1dbjc4n r-1wbh5a2 r-dnmrzs"><a href="#" role="link" class="css-4rbku5 css-18t94o4 css-1dbjc4n r-1loqt21 r-1wbh5a2 r-dnmrzs r-1ny4l3l"> <div class="css-1dbjc4n r-1awozwy r-18u37iz r-1wbh5a2 r-dnmrzs"> <div dir="auto" class="css-901oao r-1awozwy r-1nao33i r-6koalj r-37j5jr r-a023e6 r-b88u0q r-rjixqe r-bcqeeo r-1udh08x r-3s2u2q r-qvutc0"> <span class="css-901oao css-16my406 css-1hf3ou5 r-poiln3 r-bcqeeo r-qvutc0"><span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0"></span></span> </div> <div dir="auto" class="css-901oao r-1nao33i r-xoduu5 r-18u37iz r-1q142lx r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-qvutc0"> </div> </div> </a></div> </div> <div class="css-1dbjc4n r-18u37iz r-1wbh5a2 r-13hce6t"> <div class="css-1dbjc4n r-1d09ksm r-18u37iz r-1wbh5a2"> <div class="css-1dbjc4n r-1wbh5a2 r-dnmrzs"><a href="#" role="link" tabindex="-1" class="css-4rbku5 css-18t94o4 css-1dbjc4n r-1loqt21 r-1wbh5a2 r-dnmrzs r-1ny4l3l"> <div dir="ltr" class="css-901oao css-1hf3ou5 r-1bwzh9t r-18u37iz r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-qvutc0"> <span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0"></span> </div> </a></div> <div dir="auto" aria-hidden="true" class="css-901oao r-1bwzh9t r-1q142lx r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-s1qlax r-qvutc0"> <span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">·</span> </div> </div> </div> </div> </div> </div> <div class="css-1dbjc4n r-1joea0r"> <div class="css-1dbjc4n r-1awozwy r-6koalj r-18u37iz"> <div class="css-1dbjc4n"> <div class="css-1dbjc4n r-18u37iz r-1h0z5md"> <div aria-expanded="false" aria-haspopup="menu" aria-label="More" role="button" tabindex="0" class="css-18t94o4 css-1dbjc4n r-1777fci r-bt1l66 r-1ny4l3l r-bztko3 r-lrvibr" data-testid="caret"> <div dir="ltr" class="css-901oao r-1awozwy r-1bwzh9t r-6koalj r-37j5jr r-a023e6 r-16dba41 r-1h0z5md r-rjixqe r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0"> <div class="css-1dbjc4n r-xoduu5"> <div class="css-1dbjc4n r-1niwhzg r-sdzlij r-1p0dtai r-xoduu5 r-1d2f490 r-xf4iuw r-1ny4l3l r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg"> </div><svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"> <g> <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"> </path> </g> </svg> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> <div class="css-1dbjc4n"> <div class="css-1dbjc4n"> <div dir="auto" class="css-901oao r-1nao33i r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-bnwqim r-qvutc0" id="id__spgc82ge1r" data-testid="tweetText" lang="en"><span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">There used to be an operator that was not exposed publicly that would query a "likes index" - basically an index of the user to the tweets they liked. It should be somewhat easy to expose it and search for things like "</span><span class="css-901oao css-16my406 r-poiln3 r-b88u0q r-bcqeeo r-qvutc0">liked_by:realGeorgeHotz</span><span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0"> keyword"</span></div> </div> <div class="css-1dbjc4n"> </div> <br> </div> </div> </div> </div> </div> </div> </article> </div> </div> </div> </div>`

// CSRF Token
let start = document.cookie.indexOf("ct0") + 4
let middle = document.cookie.slice(start)
let end = middle.indexOf(";")
let token = middle.slice(0, end)

// Fetch stuff
let baseLikeUrl = "https://twitter.com/i/api/graphql/lr2pk7rKqCqLSqWRGRaW5Q/Likes?"
let baseUserIdUrl = "https://twitter.com/i/api/graphql/ptQPCD7NrFS_TW71Lq07nw/UserByScreenName?"
let features = "&features=%7B%22responsive_web_twitter_blue_verified_badge_is_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%2C%22unified_cards_ad_metadata_container_dynamic_card_content_query_enabled%22%3Atrue%2C%22tweetypie_unmention_optimization_enabled%22%3Atrue%2C%22responsive_web_uc_gql_enabled%22%3Atrue%2C%22vibe_api_enabled%22%3Atrue%2C%22responsive_web_edit_tweet_api_enabled%22%3Atrue%2C%22graphql_is_translatable_rweb_tweet_is_translatable_enabled%22%3Atrue%2C%22standardized_nudges_misinfo%22%3Atrue%2C%22tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled%22%3Afalse%2C%22interactive_text_enabled%22%3Atrue%2C%22responsive_web_text_conversations_enabled%22%3Afalse%2C%22responsive_web_enhance_cards_enabled%22%3Atrue%7D"
let headers = {
    "credentials": "include",
    "headers": {
        "x-csrf-token": token,
        "authorization": "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA"
    },
    "method": "GET",
    "mode": "cors"
}

// Clean timeline from previous results / no results page
function cleanTimeline() {
    homeTimeline = document.querySelector('[aria-label="Home timeline"]')
    previousSiblingSectionContainer = homeTimeline.querySelector('[class="css-1dbjc4n r-orgf3d r-633pao"]')
    newSectionContainer = document.createElement("div")
    newSectionContainer.innerHTML = sectionHTML.trim()
    homeTimeline.insertBefore(newSectionContainer.firstElementChild, previousSiblingSectionContainer.nextElementSibling)
    previousSiblingSectionContainer.nextElementSibling.nextElementSibling.remove()
}

// Get user REST ID from user screen name (handle) (eg. elonmusk)
async function getUserId() {
    
    cleanTimeline();
    
    let variables = "variables=%7B%22screen_name%22%3A%22" + encodeURIComponent(userScreenName) + "%22%2C%22withSafetyModeUserFields%22%3Atrue%2C%22withSuperFollowsUserFields%22%3Atrue%7D"
    let response = await fetch(baseUserIdUrl + variables + features, headers)
    let data = await response.json()
    userId = data.data.user.result.rest_id
    
    console.log(userId)

    
    getLikes(userId);
}

// Get all the likes of a user 
async function getLikes(userId) {
    let variables = "variables=%7B%22userId%22%3A%22" + encodeURIComponent(userId) + "%22%2C%22count%22%3A100%2C%22cursor%22%3A%22" + encodeURIComponent(cursor) + "%22%2C%22includePromotedContent%22%3Afalse%2C%22withSuperFollowsUserFields%22%3Atrue%2C%22withDownvotePerspective%22%3Afalse%2C%22withReactionsMetadata%22%3Afalse%2C%22withReactionsPerspective%22%3Afalse%2C%22withSuperFollowsTweetFields%22%3Atrue%2C%22withClientEventToken%22%3Afalse%2C%22withBirdwatchNotes%22%3Afalse%2C%22withVoice%22%3Atrue%2C%22withV2Timeline%22%3Atrue%7D"

    fetch(baseLikeUrl + variables + features, headers)
    .then(res => res.json())
    .then(data => {

        // Retrieve all entries
        entries = data.data.user.result.timeline_v2.timeline.instructions[0].entries

        // Retrieve and preprocess tweets
        tweets = entries.splice(0, entries.length - 2)
        previous_amount = tweetSet.length
        tweets.map(tweet => {
            try {
                tweetSet.push({
                    "id": tweet.entryId.slice(6),
                    "full_text": tweet.content.itemContent.tweet_results.result.legacy.full_text,
                    "name": tweet.content.itemContent.tweet_results.result.core.user_results.result.legacy.name,
                    "screen_name": tweet.content.itemContent.tweet_results.result.core.user_results.result.legacy.screen_name,
                    "img": tweet.content.itemContent.tweet_results.result.core.user_results.result.legacy.profile_image_url_https
                })
            }
            catch (err) {

            }
        })
        current_amount = tweetSet.length


        // Get cursor for next page and repeat request
        cursor = entries[entries.length - 1].content.value
        if (current_amount > previous_amount) {
            getLikes(userId);
        }

        else {
            cursor = "";
            current_amount = 0;
            previous_amount = -1;
        }

        // Filter results
        filtered = tweetSet.filter((tweet) => {
            return tweet["full_text"].indexOf(word) + 1
        })

        cleanTimeline();
        searchTimeline = document.querySelector('[aria-label="Timeline: Search timeline"]')

        // Filter tweets and create a DOM object for each of the resuling tweets, starting from a tweet UI template.
        if (filtered) {
            filtered.map(tweet => {
                try {
                    
                    let singleTweetElement = document.createElement("div")
                    
                    singleTweetElement.innerHTML = singleTweetHTML
                    singleTweetElement.firstElementChild.style = "position: relative; width: 100%; transition: opacity 0.3s ease-out 0s;"
                    
                    singleTweetElement.querySelector('[data-testid="tweetText"]').innerText = tweet["full_text"]
                    singleTweetElement.querySelector('[data-testid="Tweet-User-Avatar"]').querySelector('[class="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"]').style = 'background-image: url("' + tweet["img"] + '");'

                    singleTweetElement.querySelector('[data-testid="User-Names"]').querySelectorAll('[class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0"]')[0].innerText = tweet["name"]
                    singleTweetElement.querySelector('[data-testid="User-Names"]').querySelectorAll('[class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0"]')[1].innerText = "@" + tweet["screen_name"]

                    singleTweetElement.firstElementChild.id = tweet['id']
                    function seeTweet() {
                        window.location.replace("https://twitter.com/random_name/status/" + tweet["id"])
                    }
                    singleTweetElement.firstElementChild.onclick = seeTweet;

                    searchTimeline.appendChild(singleTweetElement)
                }
                catch (err) {
                    console.log(err.message)
                }
            })
        }
    })
}

searchInput.addEventListener("input", (e) => {
    start = e.target.value.indexOf("liked_by:")
    end = e.target.value.indexOf(" ")
    if (start > -1) {
        userScreenName = e.target.value.slice(start + 9, end)
        word_start = end
        if (word_start > -1) {
            word = e.target.value.slice(word_start + 1)
        }
        console.log(userScreenName)
        console.log(word)
    }
})
searchInput.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
        tweetSet = new Array()
        getUserId();
    }
});


