using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;
using System.Linq;

namespace RedditScanner
{
    public class PostInfo
    {
        public string Title { get; set; }
        public int UpvoteCount { get; set; }
        public string Url { get; set; }
    }
    public class RedditClient
    {
        private HttpClient client = new HttpClient();
        public async Task<IEnumerable<PostInfo>> GetLatestPostsFromSubreddit(string subreddit)
        {
            var jsonStr = await client.GetStringAsync(string.IsNullOrEmpty(subreddit) ? $"https://reddit.com/.json" : $"https://reddit.com/r/{subreddit}.json");

            var subredditResponse = JsonConvert.DeserializeObject<dynamic>(jsonStr);
            return ((IEnumerable<dynamic>)subredditResponse.data.children).Select(post => new PostInfo
            {
                Title = post.data.title,
                UpvoteCount = post.data.ups,
                Url = post.data.url
            });
        }
    }
}