# 使用官方Python运行时作为父镜像
FROM python:3.12.4-slim

# 设置工作目录
WORKDIR /app

# 复制当前目录的内容到容器的/app中
COPY . /app

# 设置pip源
RUN pip config set global.index-url https://mirrors.aliyun.com/pypi/simple/
# 安装依赖
RUN pip install --upgrade pip
RUN pip install --no-cache-dir --verbose --user -r requirements.txt

# 设置环境变量
ENV DJANGO_SETTINGS_MODULE=RainBow.settings

# 创建数据库文件
RUN touch /app/db.sqlite3

# 运行迁移
RUN python manage.py migrate

# 启动Django服务
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]