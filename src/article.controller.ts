import { Controller, Get, Req, Query, Body, Post } from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class Article {
    constructor() {}
    @Get('article')
    getHello(@Query() req: Request): string {
      console.log(req)
      return ''
    }
    @Post('setArticle')
    setArticle(@Body() req: Request): void {
        const { articles } = req
        for(const ele of articles) {

        }
    }
    @Post('addArticle')
    addArticle(@Body() req: Request): void {
        const {title, introduce, content} = req
        // this.
    }
}


class ArticleGroup{
    items: ArticleOne []
    push(items: ArticleOne) {
        this.items.push(items)
    }
    delete(id: String) {
        let index = this.items.findIndex(ele => ele.id == id)
        if(index) {
            this.items.splice(index, 1)
        }
    }
    edit(item: ArticleOne) {
        const thisItem = this.items.find(ele => ele.id == item.id)
        if(thisItem) {
            for(let i in item) {
                if(thisItem.hasOwnProperty(i)) {
                    thisItem[i] = item[i]
                }
            }
        }
    }
}

class ArticleOne{
    title: String
    introduce: String
    content: String
    id: String
    constructor(title: String, introduce: String, content: String) {
        this.title = title
        this.introduce = introduce
        this.content = content
    }
    setTitle(title: String) {
        this.title = title
    }
    getTitle() {
        return this.title
    }
    setIntroduce(introduce: String) {
        this.introduce = introduce
    }
    getIntroduce() {
        return this.introduce
    }
    setContent(content: String) {
        this.content = content
    }
    getContent() {
        return this.content
    }
}
