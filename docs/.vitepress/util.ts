const fs = require('fs');
const path = require('path');
import { ConfigOptions } from './type';

const getFile = (textList: string[], prefixPath: string) => { 
    return fs.readdirSync(path.join(process.cwd(), prefixPath)).map((file, i) => {
        return {
            text: textList[i],
            link: `${prefixPath.replace('/docs', '')}${file.replace('.md', '')}`
        }
    })
};

export const createSideBarConfig = (options: ConfigOptions) => {
    return  {
        text: options.text,
        collapsible: options.collapsible,
        collapsed: options.collapsed,
        items: getFile(options.textList, options.prefixPath)
    }
};