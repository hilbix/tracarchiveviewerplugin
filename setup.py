#!/usr/bin/env python
# -*- coding: utf-8 -*-

from setuptools import setup, find_packages

version = '0.2'

setup(
    name='TracArchiveViewer',
    version=version,
    license='Modified BSD',
    author='MATOBA Akihiro',
    author_email='matobaa+trac-hacks@gmail.com',
    url='https://trac-hacks.org/wiki/matobaa',
    description='Shows contents of archive file.',
    zip_safe=True,
    packages=find_packages(exclude=['*.tests']),
#    package_data={'archiveviewer': ['templates/*/*']},
    entry_points={
        'trac.plugins': [
            'ArchiveViewer.zip = archiveviewer.zip',
        ]
    },
)
