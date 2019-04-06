# adapt-footer  
    
An Adapt framework extension to add footer under the pages.

In progress.....


<img src="assets/adapt-footer.png" alt="Footer">



## Installation

First, be sure to install the [Adapt Command Line Interface](https://github.com/cajones/adapt-cli), then from the command line run:

    adapt install inline-menu

Or, download the ZIP and extract into the src > extensions directory and run an appropriate Grunt task.

### Demo

https://kunjsharma.github.io/#/id/co-05

### Usage

Add `_inlineMenu` in course.json:

```
	"_footer": {
	    "_isEnabled": true,
	    "_items": [
	        {
	            "_titles": [
	                {
	                    "title": "&nbsp;"
	                },
	                {
	                    "title": "Adapt Framework"
	                },
	                {
	                    "title": "E-learning"
	                },
	                {
	                    "title": "SCORM"
	                }
	            ]
	        },
	        {
	            "_titles": [
	                {
	                    "title": "Presentation Components"
	                },
	                {
	                    "title": "Question Components"
	                }
	            ]
	        },
	        {
	            "_titles": [
	                {
	                    "title": "<br><br><span class='large'>Adapt Footer</span>"
	                }
	            ]
	        },
	        {
	            "_titles": [
	                {
	                    "title": "Responsive e-learning forum"
	                },
	                {
	                    "title": "Adapt examples"
	                },
	                {
	                    "title": "Community"
	                }
	            ]
	        }
	    ]
	}
```

* `title` As many as titles in `_title`


### Demo

https://kunjsharma.github.io/#/id/co-05

### Limitations

Developed for framework, not tested compatiblity with authoring tool.

### Browser/platform specification

Intended to develop standard Adapt browser/devices specification.

----------------------------
**Version number:**  1.0.1 
**Framework versions:** 4.0.1      
**Author / maintainer:** Kunj B Sharma <kunjsharma@hotmail.com>     
