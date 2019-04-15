# adapt-footer  
    
An Adapt framework extension to add footer under the pages.


<img src="assets/adapt-footer.png" alt="Footer">


## Installation

First, be sure to install the [Adapt Command Line Interface](https://github.com/cajones/adapt-cli), then from the command line run:

    adapt install footer

Or, download the ZIP and extract into the src > extensions directory and run an appropriate Grunt task.

### Demo

https://kunjsharma.github.io

### Usage

Add `_footer` in course.json:

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

* `title` title(s) in `_titles`.


### Limitations

Developed for framework, not tested compatiblity with authoring tool.

### Browser/platform specification

Intended to develop standard Adapt browser/devices specification.

----------------------------
**Version:**  0.0.1  
**Framework version:** >=3.2   
**Author / maintainer:** Kunj B Sharma <kunjsharma@hotmail.com>  
