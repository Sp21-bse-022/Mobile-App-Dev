import axios from 'axios';

export default axios.create({
    baseURL:"https://api.yelp.com/v3/businesses",
    headers:
    {
        Authorization: "Bearer uXhfF2h1wWPfWw61kbtizTN47_0h5xAmPVMNybN1K1E0BZCnUwGmw_4vd0CT4-fiPcwyr4qA2j2aJ-r3CJdQgPyOvFgjRzftuX5RWmQP2F5nTZufq9RsLgvkyLUMZnYx",
    }
})