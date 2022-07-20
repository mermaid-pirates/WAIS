FROM node:16  
 
RUN mkdir /app
WORKDIR /app # 기본 경로 설정
COPY package*.json ./
 
RUN npm install --no-cache
 
# 서버 소스 복사
COPY . .
 
# 실행 명령어
CMD ["npm", "run", "dev"]
EXPOSE 4000