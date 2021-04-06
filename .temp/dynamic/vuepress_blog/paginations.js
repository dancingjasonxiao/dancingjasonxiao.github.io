/**
 * Generated by "@vuepress/plugin-blog"
 */

import sorters from './pageSorters'
import filters from './pageFilters'

export default [{
  pid: "tags",
  id: "CSS",
  filter: filters.tags,
  sorter: sorters.tags,
  pages: [{"path":"/tag/CSS/","interval":[0,2]}],
  prevText: "Prev",
  nextText: "Next",
},
{
  pid: "tags",
  id: "JavaScript",
  filter: filters.tags,
  sorter: sorters.tags,
  pages: [{"path":"/tag/JavaScript/","interval":[0,2]}],
  prevText: "Prev",
  nextText: "Next",
},
{
  pid: "categories",
  id: "CSS",
  filter: filters.categories,
  sorter: sorters.categories,
  pages: [{"path":"/categories/CSS/","interval":[0,2]}],
  prevText: "Prev",
  nextText: "Next",
},
{
  pid: "categories",
  id: "JavaScript",
  filter: filters.categories,
  sorter: sorters.categories,
  pages: [{"path":"/categories/JavaScript/","interval":[0,2]}],
  prevText: "Prev",
  nextText: "Next",
}]