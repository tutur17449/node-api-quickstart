/**
 * @openapi
 * tags:
 *   name: Post
 *   description: Post published by users
 */

/**
 * @openapi
 * /post:
 *   get:
 *     summary: Retrieve all posts
 *     tags: [Post]
 *     description: Retrieve all posts
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Post'
 */

/**
 * @openapi
 * /post/{id}:
 *   get:
 *     summary: Retrieve single post
 *     tags: [Post]
 *     description: Retrieve single post
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Post id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Post'
 */

/**
 * @openapi
 * /post:
 *   post:
 *     summary: Create new post
 *     tags: [Post]
 *     description: Create new post
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *             example:
 *               title: fake title
 *               content: fake content
 *     responses:
 *       "201":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Post'
 */

/**
 * @openapi
 * /post/{id}:
 *   put:
 *     summary: Update post
 *     tags: [Post]
 *     description: Update post
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Post id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *             example:
 *               title: fake title update
 *               content: fake content update
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Post'
 */

/**
 * @openapi
 * /post/{id}:
 *   delete:
 *     summary: Delete post
 *     tags: [Post]
 *     description: Delete post
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Post id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Post'
 */
