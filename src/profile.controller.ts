import { Controller, Get, Req, Query } from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class Profile {
    constructor() {}

    @Get('/profile')
    getHello(@Query() req: Request): Profile[] {
      console.log(req)
      return profileInstance;
    }
}

class Social {
    platform: String
    link: String
    id: String
    constructor(platform: String, link: String) {
        this.platform = platform
        this.link = link
    }
    setPlatform(name: String): void {
        this.platform = name
    }
    setLink(name: String): void {
        this.link = name
    }
    getPlatform() {
        return this.platform
    }
    getLink() {
        return this.link
    }
}
class ProfileInfo{
    socials: Social[]
    email: String
    phone: String
    constructor(email: String, phone: String, socials: Social[]) {
        this.socials = socials
        this.email = email
        this.phone = phone
    }
    setEmail(email: String) {
        this.email = email
    }
    setPhone(phone: String) {
        this.phone = phone
    }
    setSocials(socials: Social []) {
        this.socials = socials
    }
    addSocial(social: Social) {
        this.socials.push(social)
    }
    edit(ele : object) {
        const keys = Object.keys(ele) ?? []
        for(let k of keys) {
            if(k == 'socials') {
                if(ele[k] instanceof Array && ele[k].length > 0) {
                    const thisSocials = this[k]
                    for(let social of ele[k]) {
                        const temp = thisSocials.find(soc => soc.platform === social.platform)
                        if(temp) {
                            for(const i in social) {
                                temp[i] = social[i]
                            }
                        } else {
                            throw Error('not social Icon Found')
                        }
                    }
                } else {
                    throw Error('Param is not Array ,or Param arrays\'s length is less than 1')
                }
            } else {
                this[k] = typeof(ele[k]) == 'string'?ele[k]:this[k]
            }
        }
    }
}
