import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

import dotenv from 'dotenv';
dotenv.config();

//ratelimiter(10req/20sec)
const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(3,'20 s')
})

export default ratelimit