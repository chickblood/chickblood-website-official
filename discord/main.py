import discord
from discord.ext import commands, tasks
from keep_alive import keep_alive

intents = discord.Intents.default()
intents.messages = True

# Create bot instance
bot = commands.Bot(command_prefix='!', intents=intents)

@bot.event
async def on_ready():
    print(f'Logged in as {bot.user.name}')
    send_hi.start()  # Start the original scheduled task
    send_messages.start()  # Start the new scheduled task

@tasks.loop(seconds=86400)  # 432000 seconds = 5 days
async def send_hi():
    channel = bot.get_channel()  # The original channel 
    if channel:
        await channel.send('今天在哪里发财呢？')

# Messages to be sent daily
messages = [
    "爆竹声声把福祝，招财进宝齐临门，喜庆花篮门口摆，正偏财神带财来，愿你生意似东风，红红火火永不熄，门迎百福财无边，开业大吉",
    "誓要发，钞票让你随便花；誓要发，钱包太小该换啦；誓要发，发得脸上笑哈哈。今天你别无选择，除了发，还是发！",
    "财神说：只要我发信息给十个愚人就会发大财。我的天啊，但是我只认识你一个啊！财神说：不要紧，你级别高，一个顶十个！",
    "早发正财，晚发横财，早晚发得不能动；日积小财，月累大财，日积月累财无穷；前有明财，后有暗财，前仆后继财富通！我爱发，爱发财的我，与你携手，愿我们大发特发，一路发个够！",
    "门面开张，生意兴隆财源广；好运开张，吉祥如意事业旺；今日开张，大吉大利万寿长！财源滚滚，喜气连连，愿您开张如意，事事称心！"
]

@tasks.loop(seconds=86400)  # 86400 seconds = 1 day
async def send_messages():
    channel = bot.get_channel()  # New channel for daily messages 
    if channel:
        for message in messages:
            await channel.send(message)

# Error handling for tasks
@send_hi.before_loop
@send_messages.before_loop
async def before_tasks():
    await bot.wait_until_ready()


keep_alive()
# Run the bot
bot.run('') # 