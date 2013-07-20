# One of the Many Heads of Hydra
## At the Rock and Roll Hall of Fame

Date and Time
: Friday, August 9, 2013 2:00 p.m. EDT

Format
: Webinar hosted by OHIONET

### Description
Hydra is an open source repository solution that is becoming increasingly popular in Ohio. More than that, 
Hydra is a community for collaboration. Learn more about the instance (head) of Hydra that is growing at the 
Rock and Roll Hall of Fame + Museum Library and Archives. Adam Wead, Systems and Digital Collections Librarian 
for the Museum, will take us through the process he used to build the head, compare Hydra to other repository 
solutions, talk about modeling content, and discuss some of the requirements for adoption—all in just one hour
  
### Part 1: Conceptual Background

##### What is Hydra?

##### Current Hydra adopters and their solutions

##### What's in an asset manager?
  * identifies content types: images, audio, text, pdf, video, etc.
  * description: metadata
  * storage and preservation
  * lifecycle, helping you identify things that need to be deleted, kept or migrated to newer digital formats
  * workflows for ingesting new content
    + required descriptive fields
    + format conversions such as creating derivative files
  * searching, updating, viewing your content 
  * controlling access

##### Asset management versus archiving
  * archiving implies another set of features in addition to basic digital asset management features
  * heirarchichal organziation
  * accessioning of content
  * presentation of multiple items as a coherent unit, i.e. collections
  * an asset manager is usually item+level driven; archival information is collection driven
  * asset manager's may use collections or groups of items, but these do no always correspond to the achival notion of a collection or series

##### Current landscape of asset management solutions
  * Proprietary
    + ContentDM (Innovative)
    + Rosetta (ExLibris)
    + Canto (favors text documents for businesses)
    + Piction (favors images for business, gov. and museums)
    + and many, many more
    + either built around existing ILS or focus on specific content+type
      
  * Opensoure (often using Fedora)
    + DSpace
    + Islandora
    + RODA (http://roda+community.org/)
    + many others ...
    + make assumptions about your content: modeling, type, metadata

##### What's good about Hydra
  * makes no assumptions about your data
  * can model anything
  * using any metadata standard
  * using any content
  * stored anywhere
  * accessed by anyone or no one
  * presented as anything (using HTML and Javascript)
  * underlying technologies are abstracted (Fedora and Solr)

##### What's not-so-good about Hydra
  * technologically daunting
  * deep "stack" of technologies
  * requires in+house expertise/ability/willingness
  * not a turnkey solution (yet...)
  * no Hydra hosting options
    + you're required to provide your own hardware, but you can use hosted solutions for that

### Part 2: Technology backstories

##### Rails
  * short history of web apps
  * MVC framwork
  * convention versus configuration
  * enabling fast development

##### Fedora
  * problems with traditional RDMS
  * F is for Flexibility
  * speaks XML
  * built+in tools for persisting and storing data

##### Solr
  * short history
  * your own personal google
  * highly customizable

##### Blacklight

### Part 3: Buidling a Hydra Head

##### Requirements
  * at least 1 developer/sys. admin
    + ideally 2 people, one for dev one for admin
    + or if you already have an existing tech person, create a new dev role
  * a server with enough storage
    + everything can be on one machine, but load is a factor
    + high+demand applications will require additional hardware
    + rails/solr/fedora can each be separated out to different hardware environments as needed
  * hosting options
    + Amazon AWS
    + cloud storage with Fedora
    + hosted Rails applications
    
##### Learning
  * Ruby
  * Rails
  * Hydra

##### Buildind a "Head"
  * modeling content
  * choosing a metadata standard

##### Get Involved
  * committer's calls
  * partner meetings
  * irc chat room
  * hydra+tech email list
  * HydraCamp
